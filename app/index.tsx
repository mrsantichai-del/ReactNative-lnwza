import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 20, paddingHorizontal: 12 }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
      }}>
        <Text>Edit app/index.tsx to edit this screen. Santichai</Text>
      </View>

      <View >
        <Link href="/page2" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
        </Link>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Link href="/flexbox/ex01" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex01</Text>
        </Link>
        <Link href="/flexbox/ex02" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex02</Text>
        </Link>
        <Link href="/flexbox/ex03" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex03</Text>
        </Link>
        <Link href="/flexbox/ex04" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex04</Text>
        </Link>
        <Link href="/flexbox/ex05" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex05</Text>
        </Link>
        <Link href="/flexbox/ex06" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex06</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex07</Text>
        </Link>
        <Link href="/flexbox/ex08" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex08</Text>
        </Link>
        <Link href="/flexbox/ex09" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex09</Text>
        </Link>

        <Link href="/flexbox/ex10" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex10</Text>
        </Link>
        <Link href="/flexbox/ex11" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex11</Text>
        </Link>
        <Link href="/flexbox/ex12" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้า ex12</Text>
        </Link>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Link href="/test-greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>

        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>

        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>resort</Text>
        </Link>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>
      </View>

      <Link href="/home" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>
      <Link href="/chart" style={styles.link}>
        <Text style={styles.linkText}>Chart</Text>
      </Link>

      <Link href="/your-health" style={styles.link}>
        <Text style={styles.linkText}>Your Health</Text>
      </Link>

      <Link href="/todolist" style={styles.link}>
        <Text style={styles.linkText}>Todo List</Text>
      </Link>

      <Link href="/location" style={styles.link}>
        <Text style={styles.linkText}>Location</Text>
      </Link>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});
