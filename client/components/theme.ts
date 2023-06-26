import { CustomFlowbiteTheme } from "flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme";

export const flowbiteTheme: CustomFlowbiteTheme = {
    footer: {
        root: {
            base: "flex flex-col",
        },
        brand: {
            base: "m-6 flex items-center",
        },
        groupLink: {
            base: "flex flex-col flex-wrap text-cyan-500 dark:text-white",
            link: {
                base: "mb-4 last:mr-0 md:mr-6",
            },
        },
        icon: {
            base: "text-cyan-400 hover:text-cyan-900 dark:hover:text-white",
        },
    },
    modal: {
        body: {
            base: "space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8",
        },
    },
    sidebar: {
        root: {

            base: "h-full bg-cyan-200",
        },
        collapse: {
            list: "space-y-2 py-2 list-none",
        },
        // inner:
        //   "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-cyan-800",
        item: {
            base: "no-underline flex items-center rounded-lg p-2 text-lg font-normal text-cyan-900 hover:bg-gray-100 dark:text-white dark:hover:bg-cyan-300",
        },
        itemGroup:
            "list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    },
};
