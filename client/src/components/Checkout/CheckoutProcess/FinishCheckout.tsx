import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clearCart } from '../../../redux/actions/actions-Create';
import { selectCartTickets } from '../../../slices/cartSlice';
import CheckoutNavbar from '../CheckoutNavbar/CheckoutNavbar';
import style from './PaymentCheckout.module.css';

const FinishCheckout = () => {
	const dispatch: any = useDispatch();
	const { resolve }: any = useParams<{ resolve: string }>();

	const redirect = (): any => {
		setTimeout(
			() =>
				(window.location.href =
					process.env.REACT_APP_API || 'http://localhost:3000/purchase-detail'),
			5000,
		);
	};

	useEffect(() => {
		dispatch(clearCart());
		if (resolve === 'approved') {
			Swal.fire({
				title: '¡Pago realizado!',
				text: 'Gracias por tu compra',
				icon: 'success',
				confirmButtonText: 'Continuar',
			}).then(async (result) => {
				console.log('resultado', result.isConfirmed);
				if (result.isConfirmed) {
					redirect();
				}
			});
		} else if (resolve === 'in_process' || 'pending') {
			Swal.fire({
				title: '¡Pago pendiente!',
				text: 'El pago esta pendiente.',
				icon: 'warning',
				confirmButtonText: 'Continuar',
			}).then(async (result) => {
				console.log('resultado', result.isConfirmed);
				if (result.isConfirmed) {
					redirect();
				}
			});
		} else if (resolve === 'rejected') {
			Swal.fire({
				title: '¡Pago rechazado!',
				text: 'El pago fue rechazado.',
				icon: 'error',
				confirmButtonText: 'Continuar',
			}).then(async (result) => {
				console.log('resultado', result.isConfirmed);
				if (result.isConfirmed) {
					redirect();
				}
			});
		}
	}, [resolve]);

	return (
		<div className={style.container}>
			<CheckoutNavbar />
			<div>Sera redirigido en 5 segundos...</div>
		</div>
	);
};

export default FinishCheckout;
