import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId , setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosPublic =useAxiosPublic()
    // const [cart, refetch] = useCart()
    const {user} = useAuth()
    const navigate = useNavigate()

    const { data , refetch} = useQuery({
        queryKey: ["registeredCamp", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/register/${user?.email}`);
          return res?.data;
        },
      });

    const totalPrice = data?.reduce((total, item) => total+item?.campFees ,0)


    useEffect(() =>{
        if(totalPrice > 0 ) {
            axiosPublic.post('/create-payment-intent', {price: totalPrice})
       .then(res =>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
       })
    }
       
    },[axiosPublic, totalPrice])


    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error is', error)
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }
        // confrim payment
        const {paymentIntent, error: confrimError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confrimError){
            console.log('confrim  error', confrimError);
        }else{
            console.log('paymentn intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transiction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
                
                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    regIds: data.map(item => item._id),
                    campIds: data.map(item => item.campId),
                    status: 'pending'
                }

                const res = await axiosPublic.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch()
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your payment",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/paymentHistory')
                }

            }

        }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button 
      className="btn btn-sm btn-primary my-4"
       type="submit" 
       disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">Your Transaction ID: {transactionId} </p>}
    </form>
        </div>
    );
};

export default CheckoutForm;