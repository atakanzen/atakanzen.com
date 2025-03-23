interface OpenGraphImageProps {
  title: string;
}

const OpenGraphImage = ({ title }: OpenGraphImageProps) => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontWeight: 900,
      }}
      tw="flex items-center justify-center bg-white w-full h-full"
    >
      <div tw="flex flex-col items-center justify-center">
        <p tw="text-6xl font-black text-center mx-36">{title}</p>
        <a tw="text-3xl ">atakanzen.com</a>
      </div>
    </div>
  );
};

export default OpenGraphImage;
