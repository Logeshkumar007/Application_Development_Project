import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [passengerLocation, setPassengerLocation] = useState("");
  const [passLatitude, setPassLatitude] = useState([]);
  const [passLongitude, setPassLongitude] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  function handleSubmit() {
    console.log(passengerLocation);
    console.log(passLatitude);
    console.log(passLongitude);
    localStorage.setItem("passLati",passLatitude);
    localStorage.setItem("passLongitude",passLongitude);
    localStorage.setItem("passengerLocation",passengerLocation);
  }
  useEffect(() => {
    if (passengerLocation !== "") {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${passengerLocation}&format=json&apiKey=7150d3d1879642babb4e29c827ae645b`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const newSuggestions = result.results.map((item) => ({
            label: `${item.address_line1} ${item.address_line2}`,
            value: item,
          }));
          setSuggestions(newSuggestions);
        })
        .catch((error) => console.log("error", error));
    }
  }, [passengerLocation]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none bg-primary"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Current Location:
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white mr-4" id="location">
                Enter your Current Location :{"   "}
                <Autocomplete
                  options={suggestions}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      onChange={(e) => setPassengerLocation(e.target.value)}
                    />
                  )}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setPassengerLocation(newValue.label);
                      setPassLatitude(newValue.value.lat);
                      setPassLongitude(newValue.value.lon);
                    } else {
                      setPassengerLocation("");
                      setPassLatitude(null);
                      setPassLongitude(null);
                    }
                  }}
                />
              </p>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleSubmit}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
