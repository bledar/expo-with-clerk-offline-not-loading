import { useUser } from "@clerk/clerk-expo";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SignOutButton } from "../../components/SignOutButton";

export default function Home() {
	const { user } = useUser();

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<View style={styles.main}>
				<View style={styles.header}>
					<Text style={styles.title}>Welcome</Text>
					<Text style={styles.email}>{user?.fullName}</Text>
				</View>
				<View style={styles.buttonContainer}>
					<SignOutButton />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f7",
	},
	contentContainer: {
		flexGrow: 1,
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 32,
	},
	main: {
		maxWidth: 640,
		width: "100%",
		marginHorizontal: "auto",
		gap: 24,
	},
	header: {
		backgroundColor: "#ffffff",
		padding: 32,
		borderRadius: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
		color: "#1a1a1a",
		letterSpacing: -0.5,
		marginBottom: 8,
	},
	email: {
		fontSize: 16,
		color: "#666666",
		fontWeight: "500",
	},
	card: {
		backgroundColor: "#ffffff",
		padding: 24,
		borderRadius: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
		gap: 12,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#1a1a1a",
		marginBottom: 4,
	},
	errorContainer: {
		backgroundColor: "#fff5f5",
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#feb2b2",
	},
	errorText: {
		color: "#c53030",
		fontSize: 14,
	},
	dataContainer: {
		backgroundColor: "#f9f9f9",
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#e5e5e5",
	},
	dataText: {
		fontFamily: "monospace",
		fontSize: 14,
		color: "#1a1a1a",
	},
	loadingText: {
		color: "#666666",
		fontSize: 14,
		fontStyle: "italic",
	},
	buttonContainer: {
		maxWidth: 200,
		marginHorizontal: "auto",
		width: "100%",
	},
});
