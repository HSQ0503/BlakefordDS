import Counter from "@/components/Counter";

const Statistics = ({
  data,
}: {
  data: { enable: boolean; statistics: { value: string; label: string }[] };
}) => {
  return (
    data.enable && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-15 ">
        {data.statistics &&
          data.statistics.map(
            (stat: { value: string; label: string }, index: number) => (
              <div key={index} className="text-center">
                <h3 className="text-h1 mb-4">
                
                  <Counter target={parseInt(stat.value)} suffix="+" duration={5000} />
                </h3>
                <p className="text-xl text-text">{stat.label}</p>
              </div>
            ),
          )}
      </div>
    )
  );
};

export default Statistics;
