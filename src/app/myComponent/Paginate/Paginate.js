import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginate = ({onNext, onFirst, onPrev, onLast, noOfPages, currentPage}) =>  {
        return (
            <div style={{marginTop: 20}}>
                <Pagination size="sm">
                    <Pagination.First onClick={onFirst} />
                    <Pagination.Prev onClick={onPrev} />
                    <Pagination.Item>{currentPage} - {noOfPages} </Pagination.Item>
                    <Pagination.Next onClick={onNext} />
                    <Pagination.Last onClick={onLast} />
                </Pagination>
            </div>
        )
}
Paginate.defaultProps= {
    onNext: null,
    onFirst: null,
    onPrev: null,
    onLast: null,
    noOfPages: 100,
    currentPage: 1
}
export default Paginate
