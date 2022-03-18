//페이지네이션

import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
pageNumbers.push(i);
}

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)}  style={currentPage == number ? {color: '#17a2b8'} : null}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagination
