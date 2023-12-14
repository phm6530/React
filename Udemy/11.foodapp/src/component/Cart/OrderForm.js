
import Button from '../UI/input/button';
import { useContext , useEffect, useState} from 'react';
import { CartContext } from '../../Context/CartContext';
import FormInput from './FormInput';
import FormRadio from './FromRadio'

const initalForm = {
    userName : '',
    address : '',
    payMent : '',
    total : ''
};

export default function OrderForm(props){
    const ctx = useContext(CartContext);
    const [submitValid , setSubmitValid] = useState({
        userName : false,
        city :  false,
        street : false ,
        payMent : false
    })

    const [ orderData , setOrderData ] = useState(initalForm);
    const [ submitTouched , setSubmitTouched ] = useState({
        userName : false,
        city :  false,
        street : false ,
        payMent : false
    });

    // Total 계산
    useEffect(()=>{
        setOrderData(prev => ({...prev , total : ctx.total }))
    },[ctx.total]);

    const inputValue = (value , type , isValid) =>{
        setOrderData(prev => ({...prev , [type] : value}));
        setSubmitValid(prev =>({...prev , [type] : isValid}))
    }

    const valueValid = Object.values(submitValid);
    const resultIsValid = valueValid.reduce((isValids , item)=>{        
        return isValids && item;
    },true);


    console.log(resultIsValid);

    // fetch
    const orderFetchData = async(data) =>{
        try{
            const response = await fetch('https://foodapp-5016b-default-rtdb.firebaseio.com/order.json',{
                method : 'POST',
                headers : {
                    'Context-Type' : 'application/json'
                },
                    body : JSON.stringify(data)
                }
            )
            props.submit();
            // 완료후 초기화
            ctx.clearItem();
            
            if(!response.ok){
                throw new Error('error??');
            }
        }catch(error){
            console.log(error.message);
        }
    }

    const submitHandler =(e) =>{
        e.preventDefault();
       
        setSubmitTouched(
            {
                userName : true,
                city :  true,
                street : true ,
                payMent : true
            }
        )
        if(!resultIsValid){
            console.log('제출 x');
            return
        } 
        orderFetchData(orderData);
    }

    const touchedHandler = (type, Valid) =>{
        setSubmitTouched(prev => ({...prev, [type] : Valid}));
    }

    return(
    <>
        <form onSubmit={submitHandler}>

            <FormInput 
              inputValue={inputValue}
              touched={submitTouched.userName}
              touchedHandler={touchedHandler}
              dataType='userName'
              label='받으실 분'
            />

            <FormInput 
              inputValue={inputValue}
              touched={submitTouched.city}
              touchedHandler={touchedHandler}
              dataType='city'
              label='주소 / 구'
            />

            <FormInput 
              inputValue={inputValue}
              touched={submitTouched.street}
              touchedHandler={touchedHandler}
              dataType='street'
              label='상세주소'
            />

            <FormRadio
                 inputValue={inputValue}
                 touched={submitTouched.payMent}
                 touchedHandler={touchedHandler}
            />

            <Button 
                label='결제하기'
                disabled={!resultIsValid}
            />

        </form>
    </>)
}