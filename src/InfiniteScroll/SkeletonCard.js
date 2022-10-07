import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCard() {
    return (
        <>
            <section>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                       
                            <th scope="col">City</th>
               
                            <th>Action</th>
                        </tr>
                    </thead>

                </table>
                <Skeleton count={5} height={25} />
            </section>
        </>
    )
}

export default SkeletonCard
