import React from 'react';
import './PortfolioApplicationModal.css';

const PortfolioApplicationModal = ({system, setSystem}) => {
	const close = () => setSystem(undefined);
	React.useLayoutEffect(() => {
		let b = document.body;
		if(!!system){
			b.classList.add('modal-open');
			b.style.overflow = 'hidden';
			b.style.paddingRight = '17px';//scrollbar?
		} else {
			b.classList.remove('modal-open');
			b.style.overflow = '';
			b.style.paddingRight = '';
		}
	}, [system]);

	const facets = !system ? [] : (
		[
			["Owner", "Organization"],
			["System Status", "Status"],
			["My Roles", "Role"],
			["Databases", "Database"],
			["Integrated Systems", "Integrated Systems"]
		]
			.map(([label, key]) => {
				let value = system[key];
				let terms = Array.isArray(value) ? value : [value];
				return [label, terms.filter(t => !!t)];
			})
			.filter(([label, terms]) => terms.length > 0)
	);

	return <>
		<div className={"modal fade" + (!system ? "" : " show")}
			style={!system ? {} : { display: 'block' }}
			tabIndex={-1}
			onClick={close}
		>
			{!!system && (
				<div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{system.Title}</h5>
							<button type="button" className="btn-close" aria-label="Close" onClick={close}></button>
						</div>
						<div className="modal-body">
							<h6 className="mb-4">{system.Subtitle}</h6>
							<table className="table table-bordered">
								<tbody>
									{facets.map(([label,terms]) => 
										<tr key={label}>
											<th style={{width:'200px'}}>{label}</th>
											<td>
												{terms.map(t =>
													<span className="badge bg-light text-dark ms-2">
														{t}
													</span>
												)}
											</td>
										</tr>
									)}
								</tbody>
							</table>
							
							<p>
								{system.Description}
							</p>

							{(system.Screenshots || [{ url: "https://bulma.io/images/placeholders/1280x960.png" }]).slice(0, 1).map((ss,i) => (
								<img src={ss.url} alt={"Screenshot of " + system.Title} key={i} className="img-fluid" style={{border:'1px solid #ddd'}}/>
							))}
						</div>
						{!!system.URL && (
							<div className="modal-footer text-muted d-grid">
								<a href={system.URL} className="btn btn-success btn-block" target="_blank" rel="noreferrer">
									View Application
								</a>
							</div>
						)}
					</div>
				</div>
			)}
		</div>

		{!!system && <div className="modal-backdrop fade show" onClick={close} /> }
	</>;
}

export default PortfolioApplicationModal;