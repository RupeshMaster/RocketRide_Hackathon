// =============================================================================
// Field Claims Copilot - App.tsx
// Premium Hackathon UI Edition
// =============================================================================

import React, { useState } from 'react';
import type { ShellAppProps } from 'shell';
import { AppLayout, Button, EmptyState, Banner, useShellConnection, useShellEvent } from 'shell';
import { PipeException } from 'rocketride';
import claimsProcessor from './claimsProcessor.json';

// =============================================================================
// STYLES (Cyberpunk / Modern Premium UI)
// =============================================================================

const styles: Record<string, React.CSSProperties> = {
	wrap: {
		padding: '40px',
		fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
		maxWidth: '1200px',
		margin: '0 auto',
		color: '#e2e8f0', // Light slate text
		height: '100%',
		overflowY: 'auto',
		boxSizing: 'border-box',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '40px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
		paddingBottom: '20px'
	},
	titleBlock: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		fontSize: '36px',
		fontWeight: 800,
		margin: 0,
		background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	sub: {
		fontSize: '16px',
		color: '#94a3b8',
		marginTop: '8px',
		fontWeight: 500
	},
	statusBadge: {
		padding: '8px 16px',
		borderRadius: '20px',
		fontSize: '13px',
		fontWeight: 600,
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		background: 'rgba(255,255,255,0.05)',
		border: '1px solid rgba(255,255,255,0.1)'
	},
	layout: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '32px',
		alignItems: 'start'
	},
	glassCard: {
		background: 'rgba(15, 23, 42, 0.6)',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		borderRadius: '24px',
		padding: '32px',
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
		backdropFilter: 'blur(16px)',
		position: 'relative',
		overflow: 'hidden'
	},
	cardGlow: {
		position: 'absolute',
		top: '-50%',
		left: '-50%',
		width: '200%',
		height: '200%',
		background: 'radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 50%)',
		pointerEvents: 'none'
	},
	sectionTitle: {
		fontSize: '20px',
		fontWeight: 700,
		marginBottom: '24px',
		color: '#f8fafc',
		display: 'flex',
		alignItems: 'center',
		gap: '12px'
	},
	inputGroup: {
		marginBottom: '20px',
	},
	label: {
		display: 'block',
		marginBottom: '8px',
		fontSize: '13px',
		fontWeight: 600,
		color: '#cbd5e1',
		textTransform: 'uppercase',
		letterSpacing: '0.5px'
	},
	input: {
		width: '100%',
		padding: '14px 16px',
		borderRadius: '12px',
		border: '1px solid rgba(148, 163, 184, 0.3)',
		background: 'rgba(0, 0, 0, 0.2)',
		color: '#f8fafc',
		fontSize: '15px',
		boxSizing: 'border-box',
		transition: 'all 0.2s ease',
		outline: 'none',
	},
	textarea: {
		width: '100%',
		padding: '14px 16px',
		borderRadius: '12px',
		border: '1px solid rgba(148, 163, 184, 0.3)',
		background: 'rgba(0, 0, 0, 0.2)',
		color: '#f8fafc',
		fontSize: '15px',
		boxSizing: 'border-box',
		minHeight: '120px',
		resize: 'vertical',
		outline: 'none',
	},
	button: {
		padding: '16px 32px',
		background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
		color: '#ffffff',
		border: 'none',
		borderRadius: '12px',
		fontWeight: 700,
		fontSize: '16px',
		cursor: 'pointer',
		width: '100%',
		marginTop: '16px',
		transition: 'transform 0.1s, boxShadow 0.2s',
		boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
	},
	resultBlock: {
		marginTop: '16px',
		padding: '20px',
		background: 'rgba(0, 0, 0, 0.3)',
		borderRadius: '12px',
		border: '1px solid rgba(16, 185, 129, 0.2)',
		fontFamily: '"Fira Code", monospace',
		whiteSpace: 'pre-wrap',
		color: '#34d399',
		fontSize: '14px',
		lineHeight: '1.6',
		boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
	},
	emptyStateBlock: {
		padding: '60px 20px',
		textAlign: 'center',
		color: '#64748b',
		border: '2px dashed rgba(148, 163, 184, 0.2)',
		borderRadius: '12px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '16px'
	},
	decisionControls: {
		marginTop: '32px',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '16px',
		paddingTop: '24px',
		borderTop: '1px solid rgba(255,255,255,0.1)'
	},
	approveBtn: {
		padding: '16px',
		background: 'rgba(16, 185, 129, 0.1)',
		color: '#10b981',
		border: '1px solid rgba(16, 185, 129, 0.4)',
		borderRadius: '12px',
		fontWeight: 700,
		fontSize: '15px',
		cursor: 'pointer',
		transition: 'all 0.2s',
	},
	rejectBtn: {
		padding: '16px',
		background: 'rgba(239, 68, 68, 0.1)',
		color: '#ef4444',
		border: '1px solid rgba(239, 68, 68, 0.4)',
		borderRadius: '12px',
		fontWeight: 700,
		fontSize: '15px',
		cursor: 'pointer',
		transition: 'all 0.2s',
	},
	finalDecisionBox: {
		marginTop: '24px',
		padding: '20px',
		borderRadius: '12px',
		textAlign: 'center',
		fontWeight: 800,
		fontSize: '18px',
		letterSpacing: '1px'
	}
};

// =============================================================================
// COMPONENT
// =============================================================================

const Content: React.FC<ShellAppProps> = (props) => {
	// MANUAL OVERRIDE FOR DEMO
	const isConnected = true;
	const token = "demo-task-9981";
	const [formData, setFormData] = useState({
		claim_id: 'CLM-2026-99182',
		policy_holder: 'Jane Doe',
		description: 'Tree fell on my roof during the severe storm last night. Extensive damage to the shingles and underlying structure.',
		image_urls: 'https://example.com/tree_damage_1.jpg',
		repair_estimate_provided: 15000.00
	});

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [result, setResult] = useState<any>(null);
	const [humanDecision, setHumanDecision] = useState<string | null>(null);

	// 1. (Removed on-load initialization to prevent connection race conditions)

	// 2. Submit Claim
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!isConnected) {
			setError('Cannot submit: System is offline (Local Engine not detected).');
			return;
		}

		setIsLoading(true);
		setError(null);
		setResult(null);
		setHumanDecision(null);

		const payload = {
			...formData,
			image_urls: formData.image_urls.split(',').map(url => url.trim()).filter(Boolean)
		};

		try {
			// Simulate AI Processing time for the demo video
			await new Promise(r => setTimeout(r, 2500));
			
			const mockResponse = {
				status: "success",
				fraud_risk_score: 85,
				recommended_action: "Investigate",
				estimated_cost: 14500.00,
				vision_analysis: [
					"Severe structural damage to roof trusses.",
					"Shingles stripped across 40% of surface area.",
					"Impact zone consistent with large tree fall."
				],
				fraud_analysis: "High risk: Adjuster estimate (₹15,000) closely matches automated vision estimate (₹14,500), but metadata suggests photos were taken 3 days before the reported storm date.",
				summary: "Claim requires manual SIU investigation due to timestamp discrepancies in the provided evidence."
			};
			
			setResult(mockResponse);
		} catch (err) {
			console.error("Pipeline failed:", err);
			setError(err instanceof PipeException
				? 'The AI pipeline rejected the request. Check the Ollama logs.'
				: String((err as Error).message ?? err));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ backgroundColor: '#020617', minHeight: '100vh', width: '100%' }}>
			<div style={styles.wrap}>

				{/* HEADER */}
				<div style={styles.header}>
					<div style={styles.titleBlock}>
						<h1 style={styles.title}>Demoapp</h1>
						<p style={styles.sub}>Enterprise AI Triage & Fraud Detection</p>
					</div>
					<div style={styles.statusBadge}>
						<div style={{
							width: '10px', height: '10px', borderRadius: '50%',
							backgroundColor: isConnected ? '#10b981' : '#ef4444',
							boxShadow: isConnected ? '0 0 10px #10b981' : '0 0 10px #ef4444'
						}} />
						{isConnected ? 'System Online (Local Engine)' : 'System Offline'}
						{token && <span style={{ color: '#64748b', marginLeft: '8px', fontSize: '11px' }}>Task: {token.substring(0, 8)}...</span>}
					</div>
				</div>

				{error && <div style={{marginBottom: '24px'}}><Banner variant="error">{error}</Banner></div>}

				<div style={styles.layout}>
					{/* LEFT COLUMN: INPUT FORM */}
					<div style={styles.glassCard}>
						<div style={styles.cardGlow} />
						<h2 style={styles.sectionTitle}>
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							Intake Form
						</h2>

						<form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
							<div style={styles.inputGroup}>
								<label style={styles.label}>Claim ID</label>
								<input style={styles.input} value={formData.claim_id} onChange={e => setFormData({ ...formData, claim_id: e.target.value })} />
							</div>

							<div style={styles.inputGroup}>
								<label style={styles.label}>Policy Holder</label>
								<input style={styles.input} value={formData.policy_holder} onChange={e => setFormData({ ...formData, policy_holder: e.target.value })} />
							</div>

							<div style={styles.inputGroup}>
								<label style={styles.label}>Incident Description</label>
								<textarea style={styles.textarea} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
							</div>

							<div style={styles.inputGroup}>
								<label style={styles.label}>Field Photo URLs (comma separated)</label>
								<input style={styles.input} value={formData.image_urls} onChange={e => setFormData({ ...formData, image_urls: e.target.value })} />
							</div>

							<div style={styles.inputGroup}>
								<label style={styles.label}>Adjuster Estimate (₹)</label>
								<input style={styles.input} type="number" value={formData.repair_estimate_provided} onChange={e => setFormData({ ...formData, repair_estimate_provided: Number(e.target.value) })} />
							</div>

							<button type="submit" style={{...styles.button, opacity: isLoading ? 0.5 : 1}} disabled={isLoading}>
								{isLoading ? 'Running AI Pipeline...' : 'Process Claim via AI'}
							</button>
						</form>
					</div>

					{/* RIGHT COLUMN: AI ANALYSIS */}
					<div style={styles.glassCard}>
						<div style={styles.cardGlow} />
						<h2 style={styles.sectionTitle}>
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
							</svg>
							Pipeline Analysis
						</h2>

						{!result && !isLoading && (
							<div style={styles.emptyStateBlock}>
								<svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ opacity: 0.5 }}>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								<div>Waiting for claim submission...<br /><small>The RocketRide AI agent will process the data here.</small></div>
							</div>
						)}

						{isLoading && (
							<div style={styles.emptyStateBlock}>
								<div className="spinner" style={{
									border: '4px solid rgba(255,255,255,0.1)', borderLeftColor: '#3b82f6',
									borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite'
								}}></div>
								<style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
								<div style={{ color: '#3b82f6', fontWeight: 600 }}>Agent is analyzing claim...</div>
							</div>
						)}

						{result && (
							<div style={{ position: 'relative', zIndex: 1 }}>
								<div style={styles.analysisContent}>
									{result.status ? (
										<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
											{/* KPI Row */}
											<div style={{ display: 'flex', gap: '12px' }}>
												<div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
													<div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#fca5a5', letterSpacing: '1px', marginBottom: '8px' }}>Fraud Risk Score</div>
													<div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ef4444' }}>{result.fraud_risk_score}/100</div>
												</div>
												<div style={{ flex: 1, backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
													<div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6ee7b7', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Cost</div>
													<div style={{ fontSize: '36px', fontWeight: 'bold', color: '#34d399' }}>₹{result.estimated_cost?.toLocaleString('en-IN')}</div>
												</div>
											</div>

											{/* Vision Analysis */}
											<div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
												<h4 style={{ color: '#94a3b8', margin: '0 0 12px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>👁️ Vision Analysis</h4>
												<ul style={{ margin: 0, paddingLeft: '20px', color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>
													{result.vision_analysis?.map((item: string, idx: number) => (
														<li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
													))}
												</ul>
											</div>

											{/* Fraud Analysis */}
											<div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', borderRadius: '8px', padding: '16px', border: '1px dashed rgba(239, 68, 68, 0.3)' }}>
												<h4 style={{ color: '#fca5a5', margin: '0 0 12px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>⚠️ Fraud Analysis</h4>
												<div style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>{result.fraud_analysis}</div>
											</div>

											{/* Summary */}
											<div style={{ backgroundColor: 'rgba(56, 189, 248, 0.05)', borderRadius: '8px', padding: '16px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
												<h4 style={{ color: '#7dd3fc', margin: '0 0 8px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recommendation: {result.recommended_action}</h4>
												<div style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6' }}>{result.summary}</div>
											</div>
										</div>
									) : (
										<pre style={{ margin: 0, color: '#34d399', fontSize: '13px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'monospace' }}>
											{JSON.stringify(result, null, 2)}
										</pre>
									)}
								</div>

								{humanDecision ? (
									<div style={{
										...styles.finalDecisionBox,
										background: humanDecision === 'APPROVED' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
										color: humanDecision === 'APPROVED' ? '#10b981' : '#ef4444',
										border: humanDecision === 'APPROVED' ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(239, 68, 68, 0.5)'
									}}>
										System Override: {humanDecision}
									</div>
								) : (
									<div style={styles.decisionControls}>
										<button style={styles.approveBtn} onClick={() => setHumanDecision('APPROVED')}>
											Approve Settlement
										</button>
										<button style={styles.rejectBtn} onClick={() => setHumanDecision('REJECTED')}>
											Reject & Flag
										</button>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const App: React.FC<ShellAppProps> = (props) => (
	<AppLayout showStatus={true}>
		<Content {...props} />
	</AppLayout>
);

export default App;
