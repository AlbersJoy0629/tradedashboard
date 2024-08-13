import { LockClosedIcon } from "@heroicons/react/24/solid";

const ChangePasswordInput = () => {

    return (
        <>
            <div className="md:flex block gap-4">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Current Password
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Current Password" required />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    New Password
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="New Password" required />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>

                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Confirm Password
                </label>
                <div className="relative md:w-1/3 w-full mb-4">
                    <input className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Confirm Password" required />
                    <div className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                        <LockClosedIcon className="w-4 h-4 text-gray-500 dark:text-gray-400">
                        </LockClosedIcon>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="inlineBlock rounded border-2 w-full md:w-auto border-yellow-800 px-2 pb-2 md:px-6 md:pb-[6px] pt-2 md:text-xs text-[10px] font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out motion-reduce:transition-none dark:text-yellow-400 mb-2 md:mb-0"
                data-twe-ripple-init
            >
                Save
            </button>
        </>
    );
};

export default ChangePasswordInput;

