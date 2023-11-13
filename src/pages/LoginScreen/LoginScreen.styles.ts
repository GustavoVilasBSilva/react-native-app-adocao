import { styled, theme } from '../../config/stitches'

export const Container = styled('View', {
  flex: 1,
  backgroundColor: theme.colors.blue,
  paddingHorizontal: theme.space.xs
})

export const Wrapper = styled('View', {
  height: 324,
  gap: theme.space.dp1,
  justifyContent: 'space-between',
  paddingVertical: theme.space.dp1,
  paddingHorizontal: theme.space.md,
  backgroundColor: theme.colors.white,
  borderTopStartRadius: theme.radii.rounded,
  borderTopEndRadius: theme.radii.rounded,
  borderBottomEndRadius: theme.radii.rounded,
  borderBottomStartRadius: theme.radii.rounded
})

export const ButtonView = styled('View', {
  height: theme.sizes.dp1,
  backgroundColor: theme.colors.blue,
  paddingHorizontal: theme.space.xs
})
