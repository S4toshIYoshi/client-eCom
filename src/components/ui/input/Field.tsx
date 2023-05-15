import { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef(
	({ placeholder, error, className, type = 'text', style, ...rest }, ref) => {
		return <div>Field</div>
	}
)

export default Field
