import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom';

export default function Error(){
    //useRouteError 훅은 라우트의 loader 함수에서 throw된 
    //Error 객체를 포착하여 반환합니다. 
    //즉, loader 함수 내에서 발생한 예외 상황을 
    //useRouteError 훅을 통해 처리할 수 있습니다.


    const error = useRouteError();
    console.log(error)
    return(
        <PageContent title={error.message}/>
    )
}