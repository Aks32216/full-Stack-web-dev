import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Home() {
  return (
		<div className='flex flex-col items-center  pt-8 bg-teal-500'>
			<div className='w-11/12 h-screen'>
				<div className='text-right'>
					<Link to="/register">
						<button className='bg-gray-800 p-3 mb-10 text-gray-400 hover:text-blue-500 rounded-lg' >
							<FontAwesomeIcon className='mr-2' icon={faPlus} />Add Data
						</button>
					</Link>
					
				</div>
				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
								<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
												<th scope="col" class="px-6 py-3">
														Id
												</th>
												<th scope="col" class="px-6 py-3">
														Username
												</th>
												<th scope="col" class="px-6 py-3">
														Email
												</th>
												<th scope="col" class="px-6 py-3">
														Job
												</th>
												<th scope="col" class="px-6 py-3">
														Number
												</th>
												<th scope="col" class="px-6 py-3">
														Action
												</th>
										</tr>
								</thead>
								<tbody>
										<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
												<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														1
												</th>
												<td class="px-6 py-4">
														Aks32216
												</td>
												<td class="px-6 py-4">
														amishsingh568@gmail.com
												</td>
												<td class="px-6 py-4">
														SDE
												</td>
												<td class="px-6 py-4">
														8754847
												</td>
												<td class="px-6 py-4">
													<FontAwesomeIcon className='bg-gray-700 p-2 mr-2 rounded-md hover:bg-gray-400 hover:text-gray-800' icon={faEye} />
													<FontAwesomeIcon className='bg-gray-700 p-2 mr-2 rounded-md hover:bg-gray-400 hover:text-red-800' icon={faPencil} />
													<FontAwesomeIcon className='bg-gray-700 p-2 rounded-md hover:bg-gray-400 hover:text-green-800' icon={faMinus} />
												</td>
										</tr>
								</tbody>
						</table>
				</div>

			</div>
			
		</div>
   )
}

export default Home