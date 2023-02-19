import { IconType } from 'react-icons/lib';

const Icon = (props: { icon: IconType; text: string | number }) => {
  return (
    <div className="p-1 w-full flex flex-row justify-around">
      {props.text[1] === '×' ? (
        <>
          <i className="text-xs rotate-45">
            <props.icon />
          </i>
          <p className="text-xs leading-none">{props.text} </p>
        </>
      ) : (
        <>
          <i className="text-xs">
            <props.icon />
          </i>
          <p className="text-xs leading-none"> {props.text}</p>
        </>
      )}
    </div>
  );
};

export default Icon;
