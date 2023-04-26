import { getCurrentUser } from "../utils/data";

const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-5">
        <div className="mb-0 ">
          <img
            src={avatar}
            alt=""
            className="rounded-full h-25 w-25 object-cover"
          />
        </div>
      </div>
      <div className=" h-30 flex flex-col items-center text-6xl">{name}</div>
    </>
  );
};

export default TopContent;
