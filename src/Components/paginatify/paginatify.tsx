import { useState } from "react";

// import "./paginatify.css";

// const throttle = <T extends (...args: any[]) => any>(func: T, ms: number): ((...args: Parameters<T>) => void) => {
//     let lastCall = 0;
//     return function (...args: Parameters<T>) {
//         const now = Date.now();
//         if (now - lastCall >= ms) {
//             lastCall = now;
//             return func(...args);
//         }
//     };
// };

interface IPaginatify {
    className?: string;

    pageCount: number;
    step?: number;
    onPageChange: (pageNumber: number) => void;
}

export const Paginatify = ({ className = "paginatify", pageCount, step = 2, onPageChange }: IPaginatify) => {
    const [currentPage, setCurrentPage] = useState(1),
        // pageChange = useCallback(
        //     throttle((pageNumber) => {
        //         if (pageNumber < 1 || pageNumber > pageCount) return;
        //         onPageChange(pageNumber);
        //         setCurrentPage(pageNumber);
        //     }, 1000),
        //     []
        // ),
        pageChange = (pageNumber: number) => {
            if (pageNumber < 1 || pageNumber > pageCount) return;
            onPageChange(pageNumber);
            setCurrentPage(pageNumber);
        },
        createBreak = (key: string) => (
            <li key={key} className={`${className}__break`}>
                ...
            </li>
        ),
        first = () => [...add(1, 2), createBreak("fb")],
        last = () => [createBreak("lb"), ...add(pageCount, pageCount + 1)],
        add = (start: number, end: number) =>
            Array.from({ length: end - start }, (_, i) => {
                const numb = start + i;
                return (
                    <li
                        key={numb}
                        className={`${className}__page${currentPage === numb ? ` ${className}__page--active` : ""}`}
                        onClick={() => pageChange(numb)}>
                        {numb}
                    </li>
                );
            });

    if (!pageCount) return;

    return (
        <ul className={className}>
            <li
                key="p"
                className={`${className}__arrow--prev${currentPage === 1 ? ` ${className}__arrow--disabled` : ""}`}
                onClick={() => pageChange(currentPage - 1)}>
                ◄
            </li>

            {pageCount < step * 2 + 6
                ? add(1, pageCount + 1)
                : currentPage < step * 2 + 2
                ? [...add(1, step * 2 + 4), last()]
                : currentPage > pageCount - step * 2 - 1
                ? [first(), ...add(pageCount - step * 2 - 2, pageCount + 1)]
                : [first(), ...add(currentPage - step, currentPage + step + 1), last()]}

            <li key="CT" className={`${className}__counter`}>
                {currentPage} / {pageCount}
            </li>

            <li
                key="n"
                className={`${className}__arrow--next${currentPage === pageCount ? ` ${className}__arrow--disabled` : ""}`}
                onClick={() => pageChange(currentPage + 1)}>
                ►
            </li>
        </ul>
    );
};
