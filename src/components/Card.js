import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg hover:border-solid hover:border-orange-400 hover:border-2'>
      <Link to={`/recipes/details/${recipe._id}`}>
        <img className='w-full h-3/5' src={recipe.imageUrl} alt='plate' />
        <div className='px-6 py-4'>
          <p className='text-xl mt-3 text-orange-400 text-center hover:underline hover:decoration-3'>
            {recipe.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
