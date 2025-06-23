import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type CreatorType = {
  name: string;
  role: string;
  poster: string;
  avatar?: string;
};

type ForumType = {
  topic: string;
  likes: number;
  comments: number;
  share: number;
  creator: CreatorType;
};

type ForumCardProps = {
  forum: ForumType;
};

const ForumCard: React.FC<ForumCardProps> = ({ forum }) => {
  const navigation = useNavigation();
  const { creator } = forum;

  return (
    <View style={styles.container}>
      {/* Верхня частина з датою і кнопками */}
      <View style={styles.info}>
        <Text style={styles.infoText}>12 month ago</Text>
        <View style={styles.infoButtons}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={styles.infoButtonsPin}
              source={require('../assets/pin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButtonsOption} onPress={() => {}}>
            <View style={styles.infoButtonsOptionDot} />
            <View style={styles.infoButtonsOptionDot} />
            <View style={styles.infoButtonsOptionDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Основний контент */}
      <TouchableOpacity
        style={styles.topic}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('SingleForumScreen', { forum });
        }}>
        <View style={styles.topicCreator}>
          <Image
            source={
              creator.avatar
                ? { uri: creator.avatar }
                : require('../assets/tech_events_img.jpg')
            }
            style={styles.topicCreatorAvatar}
          />
          <View style={styles.topicCreatorInfo}>
            <View style={styles.topicCreatorInfoName}>
              <Text style={styles.topicCreatorInfoNameTxt}>{creator?.name}</Text>
              <Image
                source={require('../assets/Verify.png')}
                style={styles.topicCreatorInfoApproved}
              />
            </View>
            <Text style={styles.topicCreatorDetails}>
              {creator?.poster} | {creator?.role}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.topicContentText}>{forum?.topic}</Text>
        </View>
      </TouchableOpacity>

      {/* Взаємодія (лайки, коментарі, шер) */}
      <View style={styles.interactions}>
        <View style={styles.interactionsInfo}>
          <Image
            source={require('../assets/bx_like.png')}
            style={styles.interactionsInfoImg}
          />
          <Text style={styles.interactionsInfoTxt}>{forum.likes}</Text>
        </View>
        <View style={styles.interactionsInfo}>
          <Image
            source={require('../assets/fa6-regular_comment-dots.png')}
            style={styles.interactionsInfoImg}
          />
          <Text style={styles.interactionsInfoTxt}>{forum.comments}</Text>
        </View>
        <View style={styles.interactionsInfo}>
          <Image
            source={require('../assets/bx_share.png')}
            style={styles.interactionsInfoImg}
          />
          <Text style={styles.interactionsInfoTxt}>{forum.share}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.15)',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#B8B8B8',
  },
  infoButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoButtonsPin: {
    width: 16,
    height: 16,
  },
  infoButtonsOption: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  infoButtonsOptionDot: {
    width: 4,
    height: 4,
    backgroundColor: '#000',
    marginLeft: 2,
    borderRadius: 2,
  },
  topic: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#EAF2FF',
    marginBottom: 16,
    borderRadius: 8,
  },
  topicCreator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topicCreatorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  topicCreatorInfo: {
    marginLeft: 6,
  },
  topicCreatorInfoName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicCreatorInfoNameTxt: {
    fontSize: 12,
    fontWeight: '600',
  },
  topicCreatorInfoApproved: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  topicCreatorDetails: {
    fontSize: 8,
    fontWeight: '500',
    color: '#7A7A7A',
  },
  topicContentText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3D3D3D',
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interactionsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionsInfoImg: {
    width: 16,
    height: 16,
  },
  interactionsInfoTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#A3A3A3',
    marginLeft: 4,
  },
});

export default ForumCard;
