import InputValue from "components/pages/hookExamples/InputValue";
import { useLocalHook } from "hooks/useLocalHook";
import { useLocationStore } from "hooks/useLocationStore";
import {
  Suspense,
  useDeferredValue,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

const NewHooks = () => {
  const InputRef = useRef<HTMLInputElement>(null);
  const uId = useId();
  const [item, setItem] = useState<any>([]);
  const [one, setOne] = useState<any>("df");
  const [value, setValue] = useLocalHook("add");
  const local = useLocationStore("fname", "lname");
  const [isPending, setTransition] = useTransition();
  const [isLoading, setTransitionNew] = useTransition();
  const deferredValue = useDeferredValue(value ? value : "");
  const [statePending, setTransitionStateNew] = useTransition();

  const [state, setState] = useState({
    fname: local.fname ? local.fname : "",
    lname: local.lname ? local.lname : "",
  });

  const handleChange = (name: string, e: any) => {
    localStorage.setItem(name, e.target.value);
    setTransitionNew(() => {
      if (name === "fname") {
        setState({ ...state, fname: e.target.value });
      } else {
        setState({ ...state, lname: e.target.value });
      }
    });
  };
  const handleTranistionChange = (e: any) => {
    setOne(e.target.value);
    setTransitionStateNew(() => {
      const a = [];
      for (let i = 0; i < 12000; i++) {
        a.push(i);
      }
      setItem(a);
    });
  };
  function SlowItem({ text }: any) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }

    return <li className="item">Text: {text}</li>;
  }
  const SlowList = (value: { value: string }) => {
    const list = useMemo(() => {
      setTransition((): any => {
        const items = [];
        for (let i = 0; i < 25; i++) {
          items.push(<SlowItem key={i} text={value.value} />);
        }
        return <p>{items}</p>;
      });
    }, [value]);
    return list;
  };

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <div className="my-10">
        {/* useImperativeHandle  hooks example*/}
        <button className="border border-black p-2 mr-2" onClick={() => InputRef.current.alert()}> alert</button>
        <button className="border border-black p-2" onClick={() => InputRef.current.focusMe()}> hover</button>
        <InputValue value={'value'} ref={InputRef}/>
        {/* other hooks */}
        <form className="">
          <div className="mb-5">
            <label htmlFor="fname"> First name : </label>{" "}
            <input
              id="fname"
              className="mt-2 p-2 rounded-md dark:text-dark-500"
              type="text"
              value={state.fname}
              onChange={(e) => handleChange("fname", e)}
            />
          </div>
          <div>
            <label htmlFor="lname"> Last name : </label>{" "}
            <input
              id="lname"
              className="mt-2 p-2 rounded-md dark:text-dark-500"
              type="text"
              value={state.lname}
              onChange={(e) => handleChange("lname", e)}
            />
          </div>
          <div>
            <label htmlFor="add">address : </label>{" "}
            <input
              id="add"
              name="add"
              className="mt-2 p-2 rounded-md dark:text-dark-500"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="add">ssss : </label>{" "}
            <input
              id="add"
              name="ssssssssss"
              className="mt-2 p-2 rounded-md dark:text-dark-500"
              type="text"
              value={one}
              onChange={(e) => handleTranistionChange(e)}
            />
          </div>
          <div>
            <label htmlFor="add">Password : </label>{" "}
            <input type="password" aria-describedby={uId} />
          </div>
          <button
            type="submit"
            className="border border-black dark:border-white p-2 rounded-md mt-5"
            onClick={(e) => {
              e.preventDefault();
              alert(JSON.stringify(local));
            }}
          >
            check
          </button>
        </form>
        <div className="mt-14">
          <p>state state : {isLoading.toString()}</p>
          <p>state2 state : {statePending.toString()}</p>
          <p>loading : {isPending.toString()}</p>
          <p>value : {value}</p>
          <p>deffred value :{deferredValue}</p>
          {/*  @ts-ignore  */}
          <SlowList value={deferredValue.toString()} />
          <div>
            {statePending ? (
              <p>loading..........</p>
            ) : (
              item.map((item: number, index: number) => (
                <p key={index}>{item}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default NewHooks;
