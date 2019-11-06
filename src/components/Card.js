import React from 'react';

const Card = ({title, image, fullName, placeOfBirth, firstAppearance}) => {
	var styles = {
		width:'50%',
    	marginRight:'2%',
    	float: 'left'
	}

	var styles2 = {
		margin: '100px'
	}

	return (
		<div style={styles2}>
			<div style={styles} className='center grow shadow mw5 mw6-ns br3 hidden ba bw2 b--black-10 mv4'>
				<div className="pa3 bt b--black-10">
					<h1 className='tc f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{title}</h1>
					<img className='db tc' alt='Superhero' src={image} />
					<p className='f6 f5-ns lh-copy measure'>{fullName}</p>
					<p className='f6 f5-ns lh-copy measure'>Born: {placeOfBirth}</p>
					<p className='f6 f5-ns lh-copy measure'>First Appearance: {firstAppearance}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;