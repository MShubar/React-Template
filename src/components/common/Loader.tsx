type LoaderProps = {
    text?: string;
  };
  
  export default function Loader({ text = "Loading..." }: LoaderProps) {
    return (
      <div className="flex items-center justify-center py-10">
        <p>{text}</p>
      </div>
    );
  } 