import Button from './Button'
import { AuthContext } from '../../conText/AuthContext';
import { useContext } from 'react';

export default function Nav(){
    const ctx = useContext(AuthContext);
    return(
        <>
            <span>Nav</span>
            {ctx.loginData && <Button
                data={{
                    type : 'button',
                    value : 'LogOut',
                    onClick : ctx.onLogOut
                }}
            />}
            
        </>
    )
}