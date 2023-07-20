import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../UseAxiosSecure/useAxiosSecure";

const User = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(
        {
            queryKey: ['users'],
            queryFn: async () => {
                const response = await axiosSecure.get(`/users`);

                return response.data;
            }
        }
    )
    console.log(users)
    const deletUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tea-store-server-side.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const makeAdmin = (id) => {
        console.log(id)
        fetch(`https://tea-store-server-side.vercel.app/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${users.Name} is Admin`,
                        showConfirmButton: 'false',
                        timer: 1000
                    })
                }

            })
    }
    return (
        <div>
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index}</th>
                                    <td><img className="h-10 w-10 rounded-lg" src={user.photo} alt="" /></td>
                                    <td>{user.Name}</td>
                                    <td>{user.email}</td>
                                    <td onClick={() => makeAdmin(user._id)} className="btn btn-primary">{user.role || <>User</>}</td>
                                    <td><button onClick={() => deletUser(user._id)} className="btn btn-warning">Delet User</button></td>
                                </tr>)
                            }

                            {

                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default User;