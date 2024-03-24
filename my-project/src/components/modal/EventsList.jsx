import PropTypes from "prop-types";
import { useState } from "react";

function EventsList(props) {
  const [number, setNumber] = useState(0);
  const events = props.events;

  function changeNumber(newNumber) {
    setNumber(newNumber);
  }

  function addOneToNumber() {
    if (number == events.length - 1) {
      return setNumber(0);
    }
    setNumber(number + 1);
  }

  function substractOneToNumber() {
    if (number == 0) {
      return setNumber(events.length - 1);
    }
    setNumber(number - 1);
  }

  function closeModalEventsList() {
    props.setAction(!props.action);
  }

  return (
    <>
      <div
        className="w-screen h-screen bg-black fixed z-1 opacity-80 top-0 left-0"
        onClick={() => {
          closeModalEventsList();
        }}
      ></div>
      <div className="fixed z-30 w-3/4 h-3/4 md:w-1/2 md:h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-zinc-800 rounded-lg overflow-auto">
        <div className="absolute top-2 left-2 flex flex-row gap-2 items-center">
          {props.user ? (
            <img
              src={props.user.avatar_url}
              alt={props.user.avatar_url}
              className={`rounded-full border-2 border-yellow-400 cursor-pointer w-8 h-8 `}
            />
          ) : null}
          <div>
            <h3 className="text-white font-bold">{props.user.login} </h3>
            <h5 className="text-white text-sm">{props.events.created_at} </h5>
          </div>
        </div>
        <div className="z-50 flex flex-row gap-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4">
          {events && events.length > 0
            ? events.map((event, index) => {
                return (
                  <div
                    key={index}
                    className={`w-1 h-1 md:w-4 md:h-2 rounded-full cursor-pointer ${number == index ? "bg-yellow-400" : "bg-white opacity-50"} `}
                    onClick={() => changeNumber(index)}
                  ></div>
                );
              })
            : null}
        </div>
        <div className="z-45 flex flex-row justify-between gap-2 absolute pb-4 h-full w-full">
          <div
            className="w-1/4 h-full cursor-pointer"
            onClick={() => substractOneToNumber()}
          ></div>
          <div
            className="w-1/4 h-full cursor-pointer"
            onClick={() => addOneToNumber()}
          ></div>
        </div>
        <div className="w-full h-full overflow-hidden">
          {events && events.length > 0
            ? events.map((event, index) => {
                const url = event.repo.url.split("/")[5] + ".png";
                const urlRepo = "https://github.com/" + event.repo.name;
                return (
                  <div
                    key={index}
                    className={`w-full h-full ${number == index ? "block" : "hidden"}`}
                  >
                    <div
                      className="flex flex-col justify-center items-center gap-4"
                      style={{
                        backgroundImage: `url(${url.toLocaleLowerCase()})`,
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex justfify-center w-full justify-center pt-2 pb-2 snapBar bg-zinc-50">
                        <h3 className="text-black"> {event.type}</h3>
                      </div>
                      <a
                        href={urlRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black border border-white flex justfify-center w-1/2 rounded justify-center pt-2 pb-2 snapBar rotate-12"
                      >
                        <h3 className="text-white hover:underline">
                          {" "}
                          {event.repo.name}
                        </h3>
                      </a>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

EventsList.propTypes = {
  user: PropTypes.object.isRequired,
  events: PropTypes.array,
  setAction: PropTypes.func.isRequired,
  action: PropTypes.bool.isRequired,
};

export default EventsList;
