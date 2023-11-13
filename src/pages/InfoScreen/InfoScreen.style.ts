import { styled, theme } from '../../config/stitches'

export const Container = styled('View', {
  flex: 1,
  backgroundColor: theme.colors.white,
  paddingHorizontal: theme.space.base,
  justifyContent: 'space-between',
  paddingVertical: theme.space.xlg
})

export const ContainerButton = styled('View', {
  flex: 0,
  flexDirection: 'row',
  gap: theme.space.xs
})

export const Content = styled('View', {
  flex: 1,
  gap: theme.space.lg
})

export const Wrapper = styled('View', {
  flexDirection: 'row',
  gap: theme.space.sm
})

export const Info = styled('View', {
  flex: 1,
  gap: theme.space.xs
})

export const Label = styled('View', {
  borderWidth: 2,
  borderColor: theme.colors.gray,
  borderRadius: theme.radii.base,
  paddingHorizontal: theme.space.base,
  paddingVertical: theme.space.xs
})

export const ImageContainer = styled('View', {
  overflow: 'hidden',
  borderWidth: 2,
  borderColor: theme.colors.gray,
  borderRadius: theme.radii.base
})
