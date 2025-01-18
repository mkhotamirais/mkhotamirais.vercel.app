const data = {
  name: "ahmad",
  age: 20,
  status: "active",
};

export default function ObjectTips() {
  return (
    <div>
      ObjectTips
      <div>{JSON.stringify(data)}</div>
      <div>
        {Object.keys(data).map((item, i) => (
          <div key={i}>
            {data[item as keyof typeof data]}: {item}
          </div>
        ))}
      </div>
    </div>
  );
}
