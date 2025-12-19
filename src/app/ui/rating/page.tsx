import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

const SpacerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Rating Component
        </h1>
        <div className="flex flex-col justify-center items-center   mx-auto gap-[50px]">
          <Rating defaultValue={1}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} className="text-[#c7c7c7]" />
            ))}
          </Rating>

          <Rating defaultValue={3}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500" key={index} />
            ))}
          </Rating>

          <Rating defaultValue={5}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} size={32} />
            ))}
          </Rating>

          <Rating defaultValue={2}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-red-500" key={index} />
            ))}
          </Rating>
        </div>
      </div>
    </div>
  );
};

export default SpacerDemo;
