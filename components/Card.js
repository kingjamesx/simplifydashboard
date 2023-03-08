import Image from "next/image";

const Card = ({ text, img, location }) => {
  return (
    <section className="bg-white rounded mt-4 md:mt-1 p-4 w-full md:w-1/3 lg:w-[21%]">
      <div className="flex items-center gap-2">
        <span>
          <Image src={img} alt="transaction icon" />
        </span>
        <p className="text-[14px]">{text}</p>
      </div>
      <div className="mt-[18px]">
        <p className="font-semibold text-[22px] text-[#383737]">{location}</p>
      </div>
    </section>
  );
};

export default Card;
