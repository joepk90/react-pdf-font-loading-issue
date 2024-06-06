import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    helveticaText: {
        fontFamily: "Helvetica",
      },
    robotoText: {
        fontFamily: "roboto",
    },
  });

const TypographyTest = () => {
  return (
        <View>
            <Text>Test</Text>
            <Text style={styles.helveticaText}>Helvetica Text</Text>
            <Text style={styles.robotoText}>Roboto Text</Text>
        </View>)
}

export default TypographyTest