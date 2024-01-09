import Image from "next/image";

export const HeroPost = ({ title, uri, dateGmt, sourceUrl }: any) => {
  // Extracting components from the date string
  const [year, month, day] = dateGmt.split("T")[0].split("-");

  // Creating the formatted date string
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="post-item clear">
      <Image src={sourceUrl} alt="Hero Image" width={110} height={110} />
      <div className="content">
        <span className="posted-on">
          <span className="published">{formattedDate}</span>
        </span>{" "}
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
    </div>
  );
};
