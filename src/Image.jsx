import { useEffect, useState } from "react";

// export const Image = () => {
//   const [imageURl, setImageURL] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://picsum.photos/v2/list")
//       .then((response) => {
//         if (response.status >= 400) throw new Error("sever error");
//         return response.json();
//       })
//       .then((data) => setImageURL(data[0].download_url))
//       .catch((error) => setError(error.message));
//   }, []);

//   if (error) return <p>A network error has occured: {error}</p>;
//   return (
//     (imageURl && (
//       <>
//         <h1> An Image</h1>
//         <img src={imageURl} alt={"placeholder text"} />
//       </>
//     )) || <p>Loading...</p>
//   );
// };

//make Image a customhook

const useImageUrl = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://loremflickr.com/320/240")
      .then((response) => {
        if (response.status >= 400) throw new Error("sever error");
        return response.url;
      })
      .then((data) => setImageURL(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

export const Image = () => {
  const { imageURL, error, loading } = useImageUrl();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error has occured: {error}</p>;
  return (
    <>
      <h1> An Image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
