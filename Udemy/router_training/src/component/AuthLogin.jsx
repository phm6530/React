import { Form } from 'react-router-dom';

export function AuthLogin(){

    return(
        <>
            <Form method='post'>
                <p>
                    <span>ID : </span>
                    <input 
                    type="email" 
                    name='email'
                    required
                    />
                </p>
                <p>
                    <span>PW : </span>
                    <input 
                    type="password"
                    name='password'
                    required
                     />
                </p>
                <button>Submit</button>
            </Form>   
        </>

    )
}