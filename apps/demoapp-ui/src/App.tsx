// =============================================================================
// Field Claims Copilot - App.tsx
// Pixel-Perfect Static Layouts
// =============================================================================

import React, { useState } from 'react';
import type { ShellAppProps } from 'shell';
import { AppLayout } from 'shell';

// Import assets
import carImage from './assets/car.png';
import houseImage from './assets/house.png';

// Import RocketRide requirements
import { RocketRideClient } from 'rocketride';
import claimsProcessorPipeline from './claimsProcessor.json';

const styles: Record<string, React.CSSProperties> = {
	pageWrapper: {
		backgroundColor: '#f8fafc',
		fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
		color: '#0f172a',
		minHeight: '100vh',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '16px 48px',
		backgroundColor: '#f8fafc',
	},
	logo: {
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
		fontSize: '20px',
		fontWeight: 800,
		color: '#2563eb',
		cursor: 'pointer',
	},
	nav: {
		display: 'flex',
		gap: '32px',
		fontSize: '14px',
		fontWeight: 600,
		color: '#64748b',
	},
	navLinkActive: {
		color: '#2563eb',
		borderBottom: '2px solid #2563eb',
		paddingBottom: '4px',
	},
	headerRight: {
		display: 'flex',
		alignItems: 'center',
		gap: '24px',
	},
	primaryBtn: {
		backgroundColor: '#2563eb',
		color: '#ffffff',
		padding: '10px 20px',
		borderRadius: '8px',
		fontSize: '14px',
		fontWeight: 600,
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '8px',
	},
};

// =============================================================================
// LANDING PAGE COMPONENT
// =============================================================================

const LandingPage = ({ onNavigate }: { onNavigate: (page: 'home' | 'assessment') => void }) => {
	return (
		<div style={{ backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', minHeight: '100vh', flex: 1, overflowY: 'auto' }}>
			{/* Navbar */}
			<header style={styles.header}>
				<div style={styles.logo}>
					<div style={{ width: '28px', height: '28px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div style={{ width: '12px', height: '12px', backgroundColor: 'white', borderRadius: '2px' }}></div>
					</div>
					ClaimLensAI
				</div>
				<nav style={styles.nav}>
					<span style={{ cursor: 'pointer' }}>Claims</span>
					<span 
						style={{ cursor: 'pointer', ...styles.navLinkActive }} 
						onClick={() => onNavigate('assessment')}
					>
						Assessments
					</span>
					<span style={{ cursor: 'pointer' }}>History</span>
					<span style={{ cursor: 'pointer' }}>Support</span>
				</nav>
				<div style={styles.headerRight}>
					<button style={{ background: 'none', border: 'none', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Log In</button>
					<button style={styles.primaryBtn} onClick={() => onNavigate('assessment')}>Get Started</button>
				</div>
			</header>

			{/* Hero Section */}
			<div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
				<h1 style={{ fontSize: '48px', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: '1.2' }}>
					See Your Coverage. Understand Your Damage. Know Your Cost.
				</h1>
				<p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6', marginBottom: '40px' }}>
					Upload photos of your property or vehicle. Our AI instantly assesses damage, estimates repair costs, and verifies your coverage eligibility with precision.
				</p>
				<div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
					<button style={styles.primaryBtn}>
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
						Protect My Home
					</button>
					<button style={styles.primaryBtn}>
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
						Protect My Car
					</button>
				</div>
			</div>

			{/* Images Section */}
			<div style={{ display: 'flex', gap: '32px', padding: '0 48px 80px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
				{/* House Card */}
				<div style={{ flex: 1, position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
					<img src={houseImage} alt="Home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					<div style={{ position: 'absolute', top: '24px', left: '24px', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
						<div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
							<span style={{ color: '#3b82f6' }}>⚙️</span> AI ASSESSMENT
						</div>
						<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Damage detected on roof structure.</div>
						<div style={{ fontSize: '14px', color: '#475569', marginBottom: '12px' }}>Estimated repair: <span style={{ color: '#2563eb', fontWeight: 600 }}>$4,850</span></div>
						<div style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>Coverage Eligible</div>
					</div>
				</div>
				{/* Car Card */}
				<div style={{ flex: 1, position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
					<img src={carImage} alt="Car" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					<div style={{ position: 'absolute', bottom: '24px', right: '24px', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '280px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
							<span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>DAMAGE CHECKED</span>
							<span style={{ fontSize: '24px', fontWeight: 800, color: '#2563eb' }}>$4,850</span>
						</div>
						<div style={{ height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', marginBottom: '16px', overflow: 'hidden' }}>
							<div style={{ width: '98%', height: '100%', backgroundColor: '#2563eb' }}></div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#475569' }}>
							<span>Confidence</span>
							<span style={{ fontWeight: 700, color: '#0f172a' }}>98%</span>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div style={{ padding: '80px 48px', backgroundColor: '#f1f5f9', textAlign: 'center' }}>
				<h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Intelligence at work</h2>
				<p style={{ fontSize: '16px', color: '#475569', marginBottom: '48px' }}>A transparent process for immediate peace of mind.</p>
				
				<div style={{ display: 'flex', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
					{[
						{ num: '01', title: 'Damage', icon: '📷', desc: 'Capture images of the incident. Our computer vision models immediately isolate and categorize the structural or superficial damage.' },
						{ num: '02', title: 'Cost', icon: '🧮', desc: 'Referencing real-time regional labor and parts data, the AI generates an accurate, itemized repair estimate instantly.' },
						{ num: '03', title: 'Coverage', icon: '🛡️', desc: 'The system cross-references your specific policy limits and deductibles to confirm exact out-of-pocket costs.' }
					].map((feat, i) => (
						<div key={i} style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', textAlign: 'left', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
							<div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '120px', fontWeight: 900, color: '#f8fafc', zIndex: 0 }}>{feat.num}</div>
							<div style={{ position: 'relative', zIndex: 1 }}>
								<div style={{ width: '40px', height: '40px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '24px' }}>
									{feat.icon}
								</div>
								<h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{feat.title}</h3>
								<p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>{feat.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div style={{ padding: '80px 48px', backgroundColor: '#f1f5f9' }}>
				<div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '60px 40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
					<h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Start your AI-powered claim assessment</h2>
					<p style={{ fontSize: '16px', color: '#475569', marginBottom: '32px' }}>Skip the wait. Get clarity on your claim in seconds.</p>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
						<button style={{ ...styles.primaryBtn, backgroundColor: '#ffffff', color: '#2563eb', border: '2px solid #2563eb' }}>Analyze My Home</button>
						<button style={styles.primaryBtn}>Analyze My Car</button>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer style={{ backgroundColor: '#1e293b', color: '#94a3b8', padding: '60px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
				<div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
						<div style={{ width: '28px', height: '28px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<div style={{ width: '12px', height: '12px', backgroundColor: '#1e293b', borderRadius: '2px' }}></div>
						</div>
						ClaimLensAI
					</div>
					<div style={{ fontSize: '14px' }}>Insurance, understood by AI.</div>
				</div>
				<div style={{ display: 'flex', gap: '32px', fontSize: '13px', fontWeight: 600 }}>
					<span style={{ cursor: 'pointer' }}>Privacy Policy</span>
					<span style={{ cursor: 'pointer' }}>Terms of Service</span>
					<span style={{ cursor: 'pointer' }}>Security</span>
					<span style={{ cursor: 'pointer' }}>Contact</span>
				</div>
				<div style={{ fontSize: '12px' }}>© 2024 ClaimLensAI. Precision-Premium Claims Intelligence.</div>
			</footer>
		</div>
	);
};

// =============================================================================
// ASSESSMENT PAGE COMPONENT
// =============================================================================

const AssessmentPage = ({ onNavigate }: { onNavigate: (page: 'home' | 'assessment') => void }) => {
	const [description, setDescription] = useState('');
	const [isProcessing, setIsProcessing] = useState(false);
	const [aiResult, setAiResult] = useState<any>(null);

	const handleSubmit = async () => {
		if (!description.trim()) return;
		setIsProcessing(true);
		
		try {
			const client = new RocketRideClient({ uri: 'http://localhost:3545/engine', auth: 'local' });
			await client.connect();

			const { token } = await client.use({ pipeline: claimsProcessorPipeline as any, ttl: 900 });

			const payload = {
				claim_id: 'VHC-8829',
				policy_holder: 'Test User',
				description: description,
				image_urls: [],
				repair_estimate_provided: 0
			};

			const responseStr = await client.send(token, JSON.stringify(payload), undefined, 'application/json');
			const response = typeof responseStr === 'string' ? JSON.parse(responseStr) : responseStr;
			
			setAiResult(response);
			await client.disconnect();
		} catch (error) {
			console.error("Pipeline error:", error);
			alert("Error connecting to RocketRide pipeline.");
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
			{/* Navbar for Dashboard */}
			<header style={{ ...styles.header, borderBottom: '1px solid #e2e8f0', padding: '16px 32px' }}>
				<div style={styles.logo} onClick={() => onNavigate('home')}>
					<div style={{ width: '28px', height: '28px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div style={{ width: '12px', height: '12px', backgroundColor: 'white', borderRadius: '2px' }}></div>
					</div>
					ClaimLensAI
				</div>
				<nav style={styles.nav}>
					<span style={{ cursor: 'pointer' }}>Claims</span>
					<span style={styles.navLinkActive}>Assessments</span>
					<span style={{ cursor: 'pointer' }}>History</span>
					<span style={{ cursor: 'pointer' }}>Support</span>
				</nav>
				<div style={styles.headerRight}>
					<div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🔔</div>
					<div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>⚙️</div>
					<div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>👤</div>
				</div>
			</header>

			<div style={{ display: 'flex', flex: 1, backgroundColor: '#f8fafc', overflow: 'hidden' }}>
				{/* Left Sidebar */}
				<div style={{ width: '260px', backgroundColor: '#f8fafc', padding: '32px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<div style={{ padding: '0 16px', marginBottom: '24px' }}>
						<div style={{ color: '#2563eb', fontWeight: 800, fontSize: '18px' }}>ClaimLensAI</div>
						<div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Precision Premium</div>
					</div>

					<button style={{ ...styles.primaryBtn, marginBottom: '16px', margin: '0 16px' }}>+ New Assessment</button>
					
					<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Dashboard</div>
					<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Active Claims</div>
					<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#ffffff', backgroundColor: '#2563eb', borderRadius: '8px', cursor: 'pointer' }}>AI Analysis</div>
					<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Policy Finder</div>
					<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Settings</div>
					
					<div style={{ marginTop: 'auto' }}>
						<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Help Center</div>
						<div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Sign Out</div>
					</div>
				</div>

				{/* Main Content */}
				<div style={{ flex: 1, padding: '32px 48px', overflowY: 'auto', backgroundColor: '#ffffff' }}>
					<h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Claim Assessment: VHC-8829</h1>
					<p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>Please verify vehicle details for accurate AI analysis.</p>

					{/* Two columns: Main and Right Sidebar */}
					<div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
						
						{/* Left Main Column */}
						<div style={{ flex: '1 1 auto', minWidth: '0' }}>
							{/* Vehicle Details */}
							<div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
								<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Vehicle Details</div>
								<div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
									<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>Powertrain:</span>
									<div style={{ display: 'flex', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '4px' }}>
										<div style={{ padding: '6px 16px', fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Non-Electric</div>
										<div style={{ padding: '6px 16px', fontSize: '13px', fontWeight: 700, color: '#2563eb', backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Electric</div>
									</div>
								</div>
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
									<div>
										<span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '8px' }}>Make</span>
										<input style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }} type="text" defaultValue="Tesla" />
									</div>
									<div>
										<span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '8px' }}>Model</span>
										<input style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }} type="text" defaultValue="Model 3 Long Range" />
									</div>
									<div>
										<span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '8px' }}>Year</span>
										<input style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px' }} type="text" defaultValue="2023" />
									</div>
								</div>
							</div>

							{/* Accident Documentation */}
							<div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
								<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Accident Documentation</div>
								<p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>Please upload 5-15 photos/videos of the damage.</p>
								
								<div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '32px', textAlign: 'center', backgroundColor: '#f8fafc', marginBottom: '24px' }}>
									<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
										<div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
											📷
										</div>
									</div>
									<button style={{ ...styles.primaryBtn, margin: '0 auto 12px' }}>Add Photos & Videos</button>
									<div style={{ fontSize: '12px', color: '#94a3b8' }}>Please upload 5-15 photos/videos of the damage.</div>
								</div>

								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
									<span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Uploaded Files (5)</span>
									<span style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444' }}>⚠️ Minimum 5 files required to proceed</span>
								</div>
								<div style={{ display: 'flex', gap: '12px' }}>
									<div style={{ width: '80px', height: '80px', backgroundColor: '#eff6ff', border: '2px solid #bfdbfe', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
										<div style={{ width: '20px', height: '20px', border: '2px solid #bfdbfe', borderTopColor: '#2563eb', borderRadius: '50%', marginBottom: '8px' }}></div>
										<span style={{ fontSize: '11px', fontWeight: 600 }}>Loading...</span>
									</div>
									{[1,2,3,4].map(i => (
										<div key={i} style={{ width: '80px', height: '80px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
											🖼️
										</div>
									))}
								</div>
							</div>

							{/* Accident Description */}
							<div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
								<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Accident Description</div>
								<textarea 
									style={{ width: '100%', height: '120px', padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', color: '#475569', resize: 'none', marginBottom: '12px' }}
									placeholder="Describe the accident in detail..."
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								></textarea>
								<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600 }}>
									<span style={{ color: '#ef4444' }}>⚠️ Please enter at least 500 words.</span>
									<span style={{ color: '#64748b' }}>{description.split(' ').filter(w => w.length > 0).length}/500 minimum words</span>
								</div>
							</div>

							{/* AI Results Section - Conditionally Rendered */}
							{aiResult && (
								<div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
										<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
											<span style={{ color: '#2563eb' }}>📊</span> AI Damage Results
										</div>
										<div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
											Confidence Score: <span style={{ backgroundColor: '#dbeafe', color: '#2563eb', padding: '4px 8px', borderRadius: '12px' }}>{Math.round((aiResult.damage_assessment?.confidence_score || 0.92) * 100)}%</span>
										</div>
									</div>

									<div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>DETECTED DAMAGE ANALYSIS</div>
									
									{(aiResult.damage_assessment?.detected_damages || [
										{ part: "Front Bumper", damage_type: "Dent", severity: "Moderate", action: "REPAIR" },
										{ part: "Headlight", damage_type: "Cracked", severity: "Severe", action: "REPLACE" }
									]).map((damage: any, i: number) => (
										<div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', marginBottom: '8px' }}>
											<div>
												<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{damage.part} - {damage.damage_type}</div>
												<div style={{ fontSize: '12px', color: '#64748b' }}>Severity: {damage.severity}</div>
											</div>
											<div style={{ fontSize: '11px', fontWeight: 800, color: damage.action === 'REPLACE' ? '#ef4444' : '#2563eb', border: `1px solid ${damage.action === 'REPLACE' ? '#fca5a5' : '#bfdbfe'}`, padding: '4px 12px', borderRadius: '4px' }}>{damage.action}</div>
										</div>
									))}

									<div style={{ display: 'flex', gap: '24px', marginBottom: '24px', marginTop: '24px' }}>
										<div style={{ flex: 1 }}>
											<div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>COST BREAKDOWN</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', marginBottom: '12px' }}>
												<span>Estimated Parts</span>
												<span style={{ fontWeight: 600 }}>₹28,500</span>
											</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
												<span>Labor Cost</span>
												<span style={{ fontWeight: 600 }}>₹17,000</span>
											</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
												<span>Total Repair Cost</span>
												<span style={{ color: '#2563eb' }}>₹{(aiResult.damage_assessment?.estimated_repair_cost || 45500).toLocaleString()}</span>
											</div>
										</div>
										<div style={{ flex: 1, backgroundColor: '#f0f9ff', padding: '16px', borderRadius: '12px', border: '1px solid #bae6fd' }}>
											<div style={{ fontSize: '11px', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>INSURANCE COMPARISON</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#334155', marginBottom: '8px' }}>
												<span>AI Estimated Cost</span>
												<span style={{ fontWeight: 600 }}>₹{(aiResult.damage_assessment?.estimated_repair_cost || 45500).toLocaleString()}</span>
											</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#334155', marginBottom: '12px' }}>
												<span>Insurance Coverage</span>
												<span style={{ fontWeight: 600 }}>₹{(aiResult.insurance_comparison?.coverage_amount || 38000).toLocaleString()}</span>
											</div>
											<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 800, color: '#0369a1', borderTop: '1px solid #bfdbfe', paddingTop: '12px' }}>
												<span>Customer Payable</span>
												<span>₹{(aiResult.insurance_comparison?.customer_payable || 7500).toLocaleString()}</span>
											</div>
										</div>
									</div>

									{aiResult.damage_assessment?.inspection_recommended && (
										<div style={{ backgroundColor: '#fff1f2', color: '#be123c', padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
											⚠️ Professional inspection Recommended: Significant damage detected.
										</div>
									)}
								</div>
							)}

							{/* Actions (always visible at bottom) */}
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '24px', marginBottom: '24px' }}>
								<div style={{ fontSize: '11px', color: '#64748b', maxWidth: '300px', lineHeight: '1.5' }}>
									Preliminary estimate only. Not a final settlement or professional inspection.
								</div>
								<div style={{ display: 'flex', gap: '12px' }}>
									<button style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#0f172a', cursor: 'pointer' }}>
										Save Draft
									</button>
									<button 
										style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, border: 'none', backgroundColor: '#2563eb', color: '#ffffff', cursor: isProcessing ? 'not-allowed' : 'pointer', opacity: isProcessing ? 0.7 : 1 }}
										onClick={handleSubmit}
										disabled={isProcessing}
									>
										{isProcessing ? 'Processing AI...' : 'Submit for Assessor Review'}
									</button>
								</div>
							</div>

							{/* Coverage Options */}
							<div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '60px' }}>
								<div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Coverage Options</div>
								<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
									<label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#0f172a', cursor: 'pointer' }}>
										<input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: '#2563eb' }} />
										Standard Comprehensive Cover
									</label>
									<label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#0f172a', cursor: 'pointer' }}>
										<input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: '#2563eb' }} />
										Paid Driver Cover
									</label>
									<label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#0f172a', cursor: 'pointer' }}>
										<input type="checkbox" style={{ width: '18px', height: '18px', accentColor: '#2563eb' }} />
										Unnamed Passenger Cover
									</label>
								</div>
							</div>
							
						</div>

						{/* Right Sidebar (AI Assistant) */}
						<div style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', paddingBottom: '32px' }}>
							
							{!aiResult ? (
								<div style={{ backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '32px 20px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
									{isProcessing ? 'AI is analyzing your claim...' : 'Submit the claim to get AI assistance.'}
								</div>
							) : (
								<>
									{/* Assistant Card */}
									<div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
										<div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#2563eb', fontWeight: 800, fontSize: '14px' }}>
											🤖 ClaimLens AI Assistant
										</div>
										<div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', fontStyle: 'italic' }}>
											"{aiResult.assistant_message || "I've analyzed your claim. See the estimated breakdown to the left."}"
										</div>
									</div>

									{/* Cost Comparison */}
									<div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
										<div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: '#0f172a', fontWeight: 800, fontSize: '14px' }}>
											📊 Real-time Cost Comparison
										</div>
										
										<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
											<span>Local Repair Rates (Avg)</span>
											<span style={{ fontWeight: 700, color: '#0f172a' }}>$4,250</span>
										</div>

										<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', marginBottom: '16px' }}>
											<span style={{ fontSize: '13px', fontWeight: 700, color: '#1e40af' }}>ClaimLensAI<br/>Estimate</span>
											<span style={{ fontSize: '18px', fontWeight: 800, color: '#2563eb' }}>&lt;${((aiResult.damage_assessment?.estimated_repair_cost || 45500) / 10).toLocaleString()}</span>
										</div>

										<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>
											<span>Standard Company Rate</span>
											<span style={{ fontWeight: 700, color: '#0f172a' }}>$4,500</span>
										</div>

										<button style={{ ...styles.primaryBtn, width: '100%', backgroundColor: '#60a5fa' }}>Approve AI Estimate</button>
									</div>
								</>
							)}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================

const App: React.FC<ShellAppProps> = (props) => {
	const [currentPage, setCurrentPage] = useState<'home' | 'assessment'>('home');

	return (
		<AppLayout showStatus={false}>
			{currentPage === 'home' ? (
				<LandingPage onNavigate={setCurrentPage} />
			) : (
				<AssessmentPage onNavigate={setCurrentPage} />
			)}
		</AppLayout>
	);
};

export default App;
