import { useEffect, useState } from "react";

import Bucket from "./Bucket";

import { fetchHandler } from "../../utils";

const BucketList = () => {
  // This way of fetching may ultimately change
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const [rock, rb, pop, edm, kpop, jrock, reggaeton] = await Promise.all([
        fetchHandler(`/api/concert?genre=rock`),
        fetchHandler(`/api/concert?genre=${encodeURIComponent('r&b')}`),
        fetchHandler(`/api/concert?genre=pop`),
        fetchHandler(`/api/concert?genre=edm`),
        fetchHandler(`/api/concert?genre=K-Pop`),
        fetchHandler(`/api/concert?genre=J-Rock`),
        fetchHandler(`/api/concert?genre=Reggaeton`),
      ]);

      setData([
        { data: rock[0], title: "Rock Music" },
        { data: rb[0], title: "R&B Music" },
        { data: pop[0], title: "Pop Music" },
        { data: edm[0], title: "EDM Music" },
        { data: kpop[0], title: "K-Pop Music" },
        { data: jrock[0], title: "J-Rock Music" },
        { data: reggaeton[0], title: "Reggaeton Music" },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="overflow-hidden relative w-full h-full mx-auto pb-6">
      <div className="">
        {data.length && data.map((content) => <Bucket key={content.title} item={content} />)}
      </div>

    </section>
  );
};

export default BucketList;
