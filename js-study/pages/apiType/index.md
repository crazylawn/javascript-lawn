import useSWR from 'swr';

function Profile() {
const { data, error } = useSWR('/api/user', fetcher);

if (error) return <div>failed to load</div>;
if (!data) return <div>loading...</div>;
return <div>hello {data.name}!</div>;
}

# mutate

mutate 함수가 호출되면 해당 상태를 즉시 다시 fetch 하고 데이터를 갱신함.
변수를 외부에 둬서 mutate 메서드를 통해 갱신한다.
const handleChange = async (user) => {
await updateUser(user)
return mutate() // mutate() 는 프라미스!
}
