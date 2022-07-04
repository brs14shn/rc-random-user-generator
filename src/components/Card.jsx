const Card = ({ user }) => {
  console.log(user);
  const {
    picture: { medium },
  } = user;

  return (
    <div>
      <h1>Card oluştur</h1>
      <img className="rounded-circle w-50" src={medium} alt="" />
    </div>
  );
};

export default Card;
