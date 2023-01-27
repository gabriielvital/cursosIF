import Post from '../../components/Post';
let posts = [
  {
    post: {
      title: 'Olá mundo',
      information: {
        totalLikes: 15,
        totalRePosted: 2,
        totalComments: 10,
      },
      body: {
        type: 'text',
        content: 'Olá galera isso aqui é um teste de um post.',
      },
    },
    user: {
      userName: 'misaruto',
      userProfile: {
        name: 'Misael Guilhardes de Freitas',
        picture: {
          uri: 'https://avatars.githubusercontent.com/u/40955371',
        },
      },
    },
  },
  {
    post: {
      title: 'Lorem ipsum',
      body: {
        type: 'text',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, veniam. Repellat, natus totam exercitationem itaque rerum quam soluta mollitia dolore tempore alias odit sapiente possimus expedita animi asperiores placeat fugit!.',
      },
    },
    user: {
      userName: 'misaruto',
      userProfile: {
        name: 'Misael Guilhardes de Freitas',
        picture: {
          uri: 'https://avatars.githubusercontent.com/u/40955371',
        },
      },
    },
  },
  {
    post: {
      title: 'Lorem ipsum',
      body: {
        type: 'text',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, veniam. Repellat, natus totam exercitationem itaque rerum quam soluta mollitia dolore tempore alias odit sapiente possimus expedita animi asperiores placeat fugit!.',
      },
    },
    user: {
      userName: 'teste',
      userProfile: {
        name: 'testestes',
        picture: {},
      },
    },
  },
  {
    post: {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum',
      body: {
        type: 'text',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, veniam. Repellat, natus totam exercitationem itaque rerum quam soluta mollitia dolore tempore alias odit sapiente possimus expedita animi asperiores placeat fugit!.',
      },
    },
    user: {
      userName: 'teste',
      userProfile: {
        name: 'testestes',
        picture: {},
      },
    },
  },
];

const Posts = () => {
  return (
    <div
      style={{
        maxWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 8,
      }}
    >
      <div
        style={{
          width: '30%',
        }}
      >
        {posts.map(({ post, user }, index) => (
          <Post key={`post-${index}`} user={user} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
