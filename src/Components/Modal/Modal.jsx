import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
<link rel="stylesheet" href="./src/Components/Modal/Modal.css" />;
function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className=" buy-now" >
        <button
          type="button"
          onClick={openModal}
          className="buy-now-but"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="custom-dialog" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="custom-dialog-enter"
            enterFrom="custom-dialog-enter-active "
            enterTo="custom-dialog-enter-active"
            leave="custom-dialog-exit "
            leaveFrom="custom-dialog-exit-active"
            leaveTo="custom-dialog-exit-active"
          >
            <div className="trns" />
          </Transition.Child>

          <div className="fxd">
            <div className="flx-cont">
              <Transition.Child
                as={Fragment}
                enter="enter"
                enterFrom="enter-from"
                enterTo="enter-to"
                leave="leave"
                leaveFrom="leave-from"
                leaveTo="leave-to"
              >
                <Dialog.Panel className="dialog-panel">
                  <section className="">
                    <div className="flex-container">
                      {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                                Flowbite
                                            </a> */}
                      <div className="fll-width">
                        <div className="fll-width-cls">
                          <form className="frm" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="lbl-name"
                              >
                                Enter Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                name="name"
                                id="name"
                                className="input-field"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="address"
                                className="lbl-name"
                              >
                                Enter Full Address
                              </label>
                              <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                name="address"
                                id="address"
                                className=" input-field"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="lbl-name"
                              >
                                Enter Pincode
                              </label>
                              <input
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                type="text"
                                name="pincode"
                                id="pincode"
                                className="input-field"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="lbl-name"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                required
className="input-field"

/>
                            </div>
                          </form>
                          <button
                            onClick={() => {
                              buyNow();
                              closeModal();
                            }}
                            type="button"
                            className="pay-butt"
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
