import styled from 'styled-components';
import Nav from '../../Components/Nav';
import { Form, Status } from './styles';
import { FormEvent, useState } from 'react';

const Container = styled.div`
	background-color: #000000;
	height: 100vh;
`;

export default function Contact() {
	const [errorOrSuccessMessage, setErrorOrSuccessMessage] = useState<
		string | null
	>(null);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (phone !== '') return;

		const res = await window.fetch('/.netlify/functions/mail', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		});
		const body = await res.text();
		setErrorOrSuccessMessage(body);
		console.log({ body });
		// window.localStorage.setItem('loggedIn', 'true');
		// setLoggedIn(true);
	};

	return (
		<Container>
			<Nav />
			<>
				{errorOrSuccessMessage ? (
					<Status>{errorOrSuccessMessage}</Status>
				) : (
					<Form
						name="contact"
						method="POST"
						data-netlify="true"
						onSubmit={e => handleSubmit(e)}
					>
						<input type="hidden" name="form-name" value="contact" />

						<label>
							<span>Name:</span>
							<input
								name="name"
								value={name}
								onChange={e => setName(e.target.value)}
								required
							/>
						</label>
						<label>
							<span>Email:</span>
							<input
								name="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								required
							/>
						</label>
						<label className="phone">
							<span>Phone:</span>
							<input
								name="phone"
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</label>
						<label>
							<span>Message:</span>
							<textarea
								name="message"
								required
								value={message}
								onChange={e => setMessage(e.target.value)}
							/>
						</label>
						<button type="submit" className="btn">
							Send message
						</button>
					</Form>
				)}
			</>
		</Container>
	);
}
