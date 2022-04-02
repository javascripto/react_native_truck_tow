import { StatusBar } from 'expo-status-bar';
import { Ionicons as Icon, FontAwesome } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const colors = {
  white: '#fff',
  blue: '#275bf7',
  pink: '#ff2258',
  green: '#2ee3b3',
  yellow: '#fbc928',
  darkBlue: '#212f40',
  lightGray: '#f2f2f2',
  gray: '#cacaca'
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.elevatedCard}>
        <View style={styles.header}>
          <Avatar url="https://thispersondoesnotexist.com/image" />
          <View style={{flex: 1, marginLeft: 15}}>
            <Text style={{color: colors.darkBlue, fontSize: 18, marginBottom: 5, fontWeight: '500'}}>
              Gregory Smith
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" color={colors.yellow} size={16} style={{marginRight: 10}} />
              <Text style={{color: colors.gray, fontSize: 16, fontWeight: '600'}}>
                4.9
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <HeaderRoundedButton icon="chatbubble-ellipses" color={colors.blue} />
            <HeaderRoundedButton icon="call" color={colors.green} />
          </View>
        </View>
        <View style={styles.destination}>
          <View>
            <Icon name="locate" color={colors.green} size={28} style={{marginBottom: 15}} />
            <Icon name="location" color={colors.pink} size={28} />
          </View>
          <View style={{flex:1, marginLeft: 20}}>
            <View>
              <Text style={{color: colors.darkBlue, fontSize: 16, padding: 10}}>
                7958 Swift Village
              </Text>
            </View>
            <View style={{borderTopWidth: 1, borderColor: colors.lightGray, padding: 10}}>
              <Text style={{color: colors.darkBlue, fontSize: 16}}>
                105 William St, Chicago, US
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <FontAwesome name="truck" size={50} color={colors.darkBlue} />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25}}>
            <Detail text="DISTANCE" value="0.2 km" />
            <Detail text="TIME" value="2 min" />
            <Detail text="PRICE" value="$25.00" />
          </View>
        </View>
        <View style={{padding: 14}}>
          <TouchableOpacity style={{ backgroundColor: colors.darkBlue, borderRadius: 8, alignItems: 'center', paddingVertical: 14}}>
            <Text style={{color: colors.white, fontSize: 18, fontWeight: '500'}}>
              Cancel Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Avatar({ url = '' }) {
  return (
    <Image
      style={{ borderRadius: 50}}
      source={{ width: 55, height: 55, uri: url }}
    />
  )
}

function HeaderRoundedButton({ icon = '', color = '' }) {
  return (
    <TouchableOpacity style={[styles.roundedButton, { backgroundColor: color, marginLeft: 14 }]}>
      <Icon name={icon as any} size={28} color={colors.white} />
    </TouchableOpacity>
  )
}

function Detail({ text = '', value = '' }) {
  return (
    <View>
      <Text style={{ color: colors.gray, fontWeight: '500', marginBottom: 5 }}>{text}</Text>
      <Text style={{ color: colors.darkBlue, fontWeight: '500', }}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  elevatedCard: {
    width: '90%',
    borderRadius: 12,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 0.2,
    marginBottom: 30,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.lightGray,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  roundedButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destination: {
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    paddingLeft: 14,
    paddingVertical: 14,
    flexDirection: 'row',
  },
  details: {
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    padding: 14,
    flexDirection: 'row',
  },
});
