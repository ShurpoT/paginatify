<div align="center">

![Paginatify Preview](https://github.com/ShurpoT/paginatify/blob/main/images/Logo.png?raw=true)

</div>

<div align="center" style="font-size:20px; font-weight:700">

# Paginatify

</div>

<div align="center" style="font-size:20px">

A lightweight, simple, and customizable React pagination.

<!-- [![NPM](https://nodei.co/npm/sliderfy.png?downloads=true)](https://nodei.co/npm/sliderfy/) -->

</div>
<br/>
<br/>

<div align="center">

## Props

</div>

<div align="center" >

| Name           | Type       | Default        | Description                                              |
| -------------- | :--------- | :------------- | :------------------------------------------------------- |
| `className`    | `String`   | `"paginatify"` | The classname of the pagination container.               |
| `pageCount`    | `Number`   | `-`            | **Required.** The total number of pages.                 |
| `step`         | `Number`   | `0`            | Pages before and after current.                          |
| `onPageChange` | `Function` | `-`            | **Required.** The method to call when a page is changed. |

</div>

<br/>
<br/>
<br/>
<br/>
<br/>

<div align="center" >

# 🟥🟥🟥 Download 🟥🟥🟥

</div>

```npm
npm i paginatify
```

<br/>
<br/>
<br/>

<div align="center" >

# 🟧🟧🟧 JSX / TSX 🟧🟧🟧

### Replace `YOUR_PAGINATION` with your custom class name.

</div>

```jsx
import { Paginatify } from "paginatify";
```

```jsx
<Paginatify className="paginatify" pageCount={pageCount} step={3} onPageChange={handleClick} />
```

<br/>
<br/>
<br/>

<div align="center" >

# 🟦🟦🟦 CSS 🟦🟦🟦

### Replace `YOUR_PAGINATION` with your custom class name.

</div>

```CSS
.YOUR_PAGINATION {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    list-style: none;
}

.YOUR_PAGINATION__page,
.YOUR_PAGINATION__break,
.YOUR_PAGINATION__arrow--prev,
.YOUR_PAGINATION__arrow--next {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    cursor: pointer;
}

.YOUR_PAGINATION__arrow--prev,
.YOUR_PAGINATION__arrow--next {
    background-size: 15px;
    background-position: 50% 50%;
    background-repeat: no-repeat;

    font-size: 0;
}

.YOUR_PAGINATION__arrow--prev {
    background-image: url("../../../public/images/arrows/arrow-prev.svg");
}

.YOUR_PAGINATION__arrow--next {
    background-image: url("../../../public/images/arrows/arrow-next.svg");
}

.YOUR_PAGINATION__page:hover,
.YOUR_PAGINATION__arrow--prev:hover:not(.YOUR_PAGINATION__arrow--disabled),
.YOUR_PAGINATION__arrow--next:hover:not(.YOUR_PAGINATION__arrow--disabled) {
}

.YOUR_PAGINATION__page--active {
}

.YOUR_PAGINATION__arrow--disabled {
    opacity: 0.5;
}

.YOUR_PAGINATION__break {
    opacity: 0.5;

    cursor: default;
}

.YOUR_PAGINATION__counter {
    display: none;
    justify-content: center;
    align-items: center;
}

/*
    Don't forget to show the counter on small screens!
    Replace 720px with the resolution you need.
 */
@media (max-width: 1024px) {
    .YOUR_PAGINATION__page,
    .YOUR_PAGINATION__break {
        display: none;
    }

    .YOUR_PAGINATION__counter {
        display: flex;
    }
}
```

<br/>
<br/>
<br/>
