import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    width: 28,
    height: 28,
  },
  backButtonContainer: {
    paddingVertical: 8,
    paddingRight: 8,
    marginRight: 8,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    flex: 1,
  },
  contentContainer: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    flex: 1,
    alignSelf: 'stretch',
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  image: {
    margin: 30,
    height: 100,
    width: 100,
  },
  imageContainer: {
    paddingTop: 40,
    margin: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'center',
  },
  infoContainer: {
    borderTopColor: '#000',
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoText: {
    flex: 1,
    textAlign: 'center',
    padding: 4,
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  statusContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
  },
  statusLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
  },
  statusLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  statusList: {
    alignSelf: 'stretch',
    boderTopColor: '#000',
    borderTopWidth: 2,
  },
  statusTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },
  statusValue: {
    fontSize: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeBadge: {
    margin: 2,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeContainer: {
    alignItems: 'center',
  },
  typeLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  typeList: {
    flexGrow: 0,
  },
});

export default styles;
