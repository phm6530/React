import FormTbody from './FormTbody';

export default function FormResult(props) {
  
  const { data } = props;

  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>년도</th>
            <th>총 절감액</th>
            <th>이자(연도)</th>
            <th>총 이자</th>
            <th>투자 자본</th>
          </tr>
        </thead>
          <FormTbody data={data} />
      </table>
    </>
  );
}