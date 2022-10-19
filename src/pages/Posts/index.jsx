import Post from '../../components/Post';

let user = {
  userName: 'misaruto',
  userProfile: {
    name: 'Misael Guilhardes de Freitas',
    picture: {
      uri: 'https://avatars.githubusercontent.com/u/40955371',
    },
  },
};

let posts = [
  {
    title: 'Olá mundo',
    description: "Hello word, it's a good day to React",
    body: {
      type: 'text',
      content: 'Olá galera isso aqui é um teste de um post.',
    },
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={`post-${index}`} user={user} post={post} />
      ))}
    </div>
  );
};

export default Posts;
