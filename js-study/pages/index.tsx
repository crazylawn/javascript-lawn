import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <Link href="/dataType/operator">
          3.자바스트립트 데이터와 타입 그리고 연산자
        </Link>
      </section>
      <section>
        <Link href="/dataType/operator">4.함수와 프로토 타입 체이닝</Link>
      </section>
      <section>
        <Link href="/dataType/operator">5.실행 컨텍스트와 클로저</Link>
      </section>
    </>
  );
};

export default Home;
