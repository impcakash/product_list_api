export const Card = (props) => {
  return (
    <div className="bg-slate-200 text-center rounded-xl px-8 shadow-lg hover:bg-slate-300 hover:shadow-xl">
      <img className="m-auto mb-2 mt-2" src={props.img} alt={props.title} />
      <div className="mb-4">
        <p className="mb-2 text-xl font-semibold min-h-14">
          {props.id}. {props.title}
        </p>
        <p className="text-lg font-medium mb-1">$ {props.price}</p>
        <p className="font-light mb-2">Rating: {props.rating}</p>
        <p className="text-justify mb-2 min-h-36">{props.description}</p>
      </div>
      <button className="bg-slate-700 text-slate-300 rounded min-w-32 min-h-8 mb-6 hover:bg-slate-900">
        Buy Now
      </button>
    </div>
  );
};
