import classes from './checkout.module.css';

export default function Checkout(){
    
    return(
        <>
        <div className={classes.control}>
            <label htmlFor='name'>주문자 성함 </label>
            <input type="text" id='name'/>
        </div>

          <div className={classes.control}>
            <label htmlFor='name' className={classes.name}>구 / 시도</label>
            <select name="" id="">
                <option value="">---선택---</option>
                <option value="">서울</option>
                <option value="">경기도</option>
                <option value="">충청북도</option>
            </select>
          </div>

          <div className={classes.control}>
            <label htmlFor='payment-method'>결제 수단</label>
            <label>
                <input type="radio" name="payment-method" value="card"/>
                카드
            </label>
            <label>
                <input type="radio" name="payment-method" value="other"/>
                무통장입금
            </label>
            </div>

          <div className={classes.control}>
            <label htmlFor='street'>상세주소</label>
            <input type="text" id='street'/>
          </div>    

        </>
    )
}